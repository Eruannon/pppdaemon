"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import type { VideoSection, VideoSectionLayout } from "./types";

type VideosPageClientProps = {
  sections: VideoSection[];
};

type ActiveVideoState = {
  sectionId: string;
  index: number;
} | null;

function truncate(text: string, maxLength: number) {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

function getSectionLayout(layout?: VideoSectionLayout): VideoSectionLayout {
  return layout === "landscape" ? "landscape" : "portrait";
}

function getAspectClass(layout: VideoSectionLayout) {
  return layout === "landscape" ? "aspect-video" : "aspect-[4/5]";
}

function getDesktopGridClass(layout: VideoSectionLayout) {
  return layout === "landscape"
    ? "hidden md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4"
    : "hidden md:grid md:grid-cols-2 md:gap-6 xl:grid-cols-4";
}

function getMobileCardWidthClass(layout: VideoSectionLayout) {
  return layout === "landscape"
    ? "w-[88vw] min-w-[88vw] max-w-[520px]"
    : "w-[78vw] min-w-[78vw] max-w-[320px]";
}

function getModalWidthClass(layout: VideoSectionLayout) {
  return layout === "landscape"
    ? "max-w-5xl"
    : "max-w-[420px] sm:max-w-[480px]";
}

export function VideosPageClient({ sections }: VideosPageClientProps) {
  const [activeVideo, setActiveVideo] = useState<ActiveVideoState>(null);

  const activeSection = useMemo(() => {
    if (!activeVideo) return null;
    return sections.find((section) => section.id === activeVideo.sectionId) ?? null;
  }, [activeVideo, sections]);

  const activeLayout = getSectionLayout(activeSection?.layout);

  const currentVideo = useMemo(() => {
    if (!activeVideo || !activeSection) return null;
    return activeSection.videos[activeVideo.index] ?? null;
  }, [activeVideo, activeSection]);

  const canGoPrev = !!activeSection && !!activeVideo && activeVideo.index > 0;
  const canGoNext =
    !!activeSection &&
    !!activeVideo &&
    activeVideo.index < activeSection.videos.length - 1;

  useEffect(() => {
    if (!currentVideo) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }

      if (event.key === "ArrowLeft" && canGoPrev && activeVideo) {
        setActiveVideo({
          sectionId: activeVideo.sectionId,
          index: activeVideo.index - 1,
        });
      }

      if (event.key === "ArrowRight" && canGoNext && activeVideo) {
        setActiveVideo({
          sectionId: activeVideo.sectionId,
          index: activeVideo.index + 1,
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentVideo, activeVideo, canGoPrev, canGoNext]);

  const openOrToggleVideo = (sectionId: string, index: number) => {
    setActiveVideo((current) => {
      if (current && current.sectionId === sectionId && current.index === index) {
        return null;
      }

      return { sectionId, index };
    });
  };

  const goPrev = () => {
    if (!activeVideo || !canGoPrev) return;
    setActiveVideo({
      sectionId: activeVideo.sectionId,
      index: activeVideo.index - 1,
    });
  };

  const goNext = () => {
    if (!activeVideo || !canGoNext) return;
    setActiveVideo({
      sectionId: activeVideo.sectionId,
      index: activeVideo.index + 1,
    });
  };

  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-neutral-500">
            Galeria Cyfrowa
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
            
          </h1>

        </div>

        <div className="space-y-16">
          {sections.map((section) => {
            const layout = getSectionLayout(section.layout);
            const aspectClass = getAspectClass(layout);
            const desktopGridClass = getDesktopGridClass(layout);
            const mobileCardWidthClass = getMobileCardWidthClass(layout);

            return (
              <section key={section.id} className="space-y-6">
                <div className="flex items-end justify-between gap-4 border-b border-neutral-200 pb-4">
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      {section.videos.length} materiałów
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                  

                    {section.videos.length > 1 ? (
                      <p className="md:hidden text-xs text-neutral-500">
                        Przesuwaj poziomo
                      </p>
                    ) : null}
                  </div>
                </div>

                {section.videos.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-sm text-neutral-500">
                    Brak dostępnych materiałów w tej sekcji.
                  </div>
                ) : (
                  <>
                    <div className="md:hidden -mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none]">
                      <div className="flex snap-x snap-mandatory gap-4">
                        {section.videos.map((video, index) => {
                          const isActive =
                            activeVideo?.sectionId === section.id &&
                            activeVideo?.index === index;

                          return (
                            <button
                              key={video.id}
                              type="button"
                              onClick={() => openOrToggleVideo(section.id, index)}
                              className={[
                                "group shrink-0 snap-start text-left outline-none transition",
                                mobileCardWidthClass,
                                "focus-visible:ring-2 focus-visible:ring-neutral-900",
                              ].join(" ")}
                              aria-pressed={isActive}
                              aria-label={`Otwórz wideo: ${video.title}`}
                            >
                              <div
                                className={[
                                  "relative overflow-hidden border bg-neutral-100 shadow-sm transition",
                                  isActive
                                    ? "border-neutral-900 ring-2 ring-neutral-900"
                                    : "border-neutral-200",
                                ].join(" ")}
                              >
                                <div className={`relative ${aspectClass}`}>
                                  {video.thumbnail ? (
                                    <img
                                      src={video.thumbnail}
                                      alt={video.title}
                                      loading="lazy"
                                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                    />
                                  ) : (
                                    <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                                      Brak miniatury
                                    </div>
                                  )}

                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                  <div className="absolute inset-x-0 bottom-0 p-4">
                                    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm">
                                      <Play className="h-4 w-4 fill-current" />
                                      Odtwórz
                                    </div>

                                    <h3 className="mt-3 text-base font-semibold leading-6 text-white">
                                      {truncate(video.title, layout === "landscape" ? 90 : 70)}
                                    </h3>
                                  </div>
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className={desktopGridClass}>
                      {section.videos.map((video, index) => {
                        const isActive =
                          activeVideo?.sectionId === section.id &&
                          activeVideo?.index === index;

                        return (
                          <button
                            key={video.id}
                            type="button"
                            onClick={() => openOrToggleVideo(section.id, index)}
                            className="group text-left outline-none transition focus-visible:ring-2 focus-visible:ring-neutral-900"
                            aria-pressed={isActive}
                            aria-label={`Otwórz wideo: ${video.title}`}
                          >
                            <div
                              className={[
                                "relative overflow-hidden border bg-neutral-100 shadow-sm transition",
                                isActive
                                  ? "border-neutral-900 ring-2 ring-neutral-900"
                                  : "border-neutral-200",
                              ].join(" ")}
                            >
                              <div className={`relative ${aspectClass}`}>
                                {video.thumbnail ? (
                                  <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                                    Brak miniatury
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-4">
                                  <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 shadow-sm">
                                    <Play className="h-4 w-4 fill-current" />
                                    Odtwórz
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="px-1 pt-4">
                              <h3 className="text-base font-semibold leading-6 text-neutral-900">
                                {video.title}
                              </h3>

                              {video.description ? (
                                <p className="mt-2 text-sm leading-6 text-neutral-600">
                                  {truncate(
                                    video.description,
                                    layout === "landscape" ? 160 : 120
                                  )}
                                </p>
                              ) : null}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
              </section>
            );
          })}
        </div>
      </main>

      {currentVideo && activeSection ? (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
          aria-modal="true"
          role="dialog"
        >
          <div className="flex min-h-screen items-center justify-center p-4 sm:p-6">
            <div
              className={`relative w-full ${getModalWidthClass(activeLayout)}`}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute -top-12 left-0 right-0 flex items-center justify-between gap-3">
                <div className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:text-sm">
                  {activeSection.title} · {activeVideo!.index + 1} /{" "}
                  {activeSection.videos.length}
                </div>

                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
                  aria-label="Zamknij wideo"
                >
                  <X className="h-4 w-4" />
                  Zamknij
                </button>
              </div>

              <div className="overflow-hidden rounded-[28px] bg-black shadow-2xl ring-1 ring-white/10">
                <div className={getAspectClass(activeLayout)}>
                  <iframe
                    src={currentVideo.embedUrl}
                    title={currentVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-4 rounded-[24px] bg-white/10 p-4 text-white backdrop-blur">
                <h3 className="text-lg font-semibold leading-7">
                  {currentVideo.title}
                </h3>

                {currentVideo.description ? (
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    {currentVideo.description}
                  </p>
                ) : null}

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={!canGoPrev}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition enabled:hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Poprzednie
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={!canGoNext}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition enabled:hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Następne
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}