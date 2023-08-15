"use client";
import { PositionsProvider, usePositions } from "@/lib/context/positions";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const PositionsTable: React.FC<any> = ({ data = [] }) => {
    const positions = usePositions();
  return (
    <Card>
      <CardContent className="pt-4">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead>Keyword</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Country</TableHead>
              <TableHead className="text-right">Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...data, ...positions].map((o, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">
                  {o.keyword}
                </TableCell>
                <TableCell>{o.url}</TableCell>
                <TableCell>{o.country}</TableCell>
                <TableCell className="text-right">{o.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default PositionsTable;
