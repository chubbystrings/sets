"use client"

"use client";

import React from "react";
import { usePageName } from "@/hooks/usePageName";

export default function Support() {
  const { pathname } = usePageName();
  return (
    <section>
      <div>
        <h2 className="display-medium capitalize">{pathname}</h2>
      </div>
      <h2>Under Construction</h2>
    </section>
  );
}

