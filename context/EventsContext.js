"use client";

import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext(null);
const STORAGE_KEY = "campus-events:saved";

export function EventsProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setSavedIds(parsed.filter((id) => typeof id === "string"));
        }
      }
    } catch (error) {
      console.error("Could not load saved events from local storage.", error);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch (error) {
      console.error("Could not save events to local storage.", error);
    }
  }, [isHydrated, savedIds]);

  function toggleSaved(id) {
    setSavedIds((current) =>
      current.includes(id)
        ? current.filter((savedId) => savedId !== id)
        : [...current, id],
    );
  }

  return (
    <EventsContext.Provider value={{ savedIds, toggleSaved, isHydrated }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within an EventsProvider.");
  }
  return context;
}
