"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COUNTRIES } from "@/content/misc";
import { useState } from "react";

export function SerpInput() {
  const [formData, setFormData] = useState({
    keyword: "",
    url: "",
    country: undefined,
  });
  const onSubmit = () => {
    console.log({ ...formData });
  };

  const onChange = (key: string) => (value: any) =>
    setFormData({ ...formData, [key]: value });
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-row gap-x-4 items-end">
          <div className="space-y-2 grow">
            <Label htmlFor="date" className="shrink-0">
              Keyword
            </Label>
            <Input
              className="[&>button]:w-[260px]"
              placeholder="zendesk alternatives"
              value={formData.keyword}
              onChange={(e) => onChange("keyword")(e.target.value)}
            />
          </div>
          <div className="space-y-2 grow">
            <Label htmlFor="date">URL</Label>
            <Input
              className="[&>button]:w-[260px]"
              placeholder="https://devrev.ai"
              value={formData.url}
              onChange={(e) => onChange("url")(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date" className="shrink-0">
              Country
            </Label>
            <Select
              value={formData.country}
              onValueChange={onChange("country")}
            >
              <SelectTrigger
                id="country"
                className="line-clamp-1 w-[160px] truncate"
              >
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {COUNTRIES.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={onSubmit}>Get Position</Button>
        </div>
      </CardContent>
    </Card>
  );
}
