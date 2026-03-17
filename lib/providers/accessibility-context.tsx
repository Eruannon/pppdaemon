"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


interface AccessibilityContextType {
  fontSizeLevel: number;
  highContrast: boolean;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  resetFontSize: () => void;
  toggleHighContrast: () => void;
}


const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);


export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }
  return context;
};


interface AccessibilityProviderProps {
  children: ReactNode;
}


export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({
  children,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState(1);
  const [highContrast, setHighContrast] = useState(false);


  useEffect(() => {
    const savedFontSize = localStorage.getItem("fontSizeLevel");
    const savedHighContrast = localStorage.getItem("highContrast");

    if (savedFontSize) setFontSizeLevel(parseInt(savedFontSize, 10));
    if (savedHighContrast) setHighContrast(savedHighContrast === "true");
  }, []);


  useEffect(() => {
    localStorage.setItem("fontSizeLevel", fontSizeLevel.toString());
    localStorage.setItem("highContrast", highContrast.toString());
  }, [fontSizeLevel, highContrast]);

  const increaseFontSize = () => {
    setFontSizeLevel((prev) => Math.min(prev + 1, 4));
  };

  const decreaseFontSize = () => {
    setFontSizeLevel((prev) => Math.max(prev - 1, 0));
  };

  const resetFontSize = () => {
    setFontSizeLevel(1);
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  const value = {
    fontSizeLevel,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    toggleHighContrast,
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};
