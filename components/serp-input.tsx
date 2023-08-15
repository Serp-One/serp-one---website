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
import useSerpApi from "@/lib/hooks/serp";
import { POSITIONS_ACTION, usePositionsDispatch } from "@/lib/context/positions";

export function SerpInput() {
  const { getPosition } = useSerpApi();
  const dispatch = usePositionsDispatch();
  const [formData, setFormData] = useState({
    keyword: "zendesk alternatives",
    url: "https://devrev.ai",
    country: "US",
  });
  const onSubmit = () => {
    getPosition({ ...formData }).then((res) => {
      console.log(res);
      dispatch({ type: POSITIONS_ACTION.ADDED, payload: {...formData, position: res.position } });
    }).catch((err) => {

    })
  };

  const onChange = (key: string) => (value: any) =>
    setFormData({ ...formData, [key]: value });
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-2 grow">
            <Label htmlFor="date" className="shrink-0">
              Keyword
            </Label>
            <Input
              className="[&>button]:w-[260px]"
              placeholder="zendesk alternatives"
              value={formData.keyword}
              autoComplete="on"
              onChange={(e) => onChange("keyword")(e.target.value)}
            />
          </div>
          <div className="space-y-2 grow">
            <Label htmlFor="date">URL</Label>
            <Input
              className="[&>button]:w-[260px]"
              placeholder="https://devrev.ai"
              value={formData.url}
              autoComplete="on"
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
          <Button className="md:self-end grow" onClick={onSubmit}>Look&nbsp;Up</Button>
        </div>
      </CardContent>
    </Card>
  );
}
