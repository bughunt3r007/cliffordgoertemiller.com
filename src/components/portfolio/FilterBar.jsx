import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FilterBar({ activeFilter, setActiveFilter }) {
  const filters = [
    { key: "all", label: "All Projects", count: null },
    { key: "mechanical_design", label: "Mechanical Design", count: null },
    { key: "product_development", label: "Product Development", count: null },
    { key: "cad_modeling", label: "CAD Modeling", count: null },
    { key: "analysis", label: "Analysis", count: null },
    { key: "prototyping", label: "Prototyping", count: null },
    { key: "automation", label: "Automation", count: null }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={activeFilter === filter.key ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveFilter(filter.key)}
          className="flex items-center space-x-1"
        >
          <span>{filter.label}</span>
          {filter.count && (
            <Badge variant="secondary" className="ml-1 text-xs">
              {filter.count}
            </Badge>
          )}
        </Button>
      ))}
    </div>
  );
}