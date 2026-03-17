import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { videoGalleryCacheTag } from "@/lib/youtube/video-gallery";

const VIDEOS_PATH = "/videos";

function getExpectedSecret(): string {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    throw new Error("[revalidate-videos] Missing REVALIDATE_SECRET in environment.");
  }

  return secret;
}

function readProvidedSecret(request: NextRequest): string | null {
  return (
    request.headers.get("x-revalidate-secret") ??
    request.nextUrl.searchParams.get("secret") ??
    null
  );
}

export async function POST(request: NextRequest) {
  try {
    const expectedSecret = getExpectedSecret();
    const providedSecret = readProvidedSecret(request);

    if (providedSecret !== expectedSecret) {
      return NextResponse.json(
        {
          ok: false,
          error: "Unauthorized.",
        },
        { status: 401 },
      );
    }

    revalidateTag(videoGalleryCacheTag);
    revalidatePath(VIDEOS_PATH);

    return NextResponse.json({
      ok: true,
      revalidated: true,
      path: VIDEOS_PATH,
      tag: videoGalleryCacheTag,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown revalidation error.";

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status: 500 },
    );
  }
}