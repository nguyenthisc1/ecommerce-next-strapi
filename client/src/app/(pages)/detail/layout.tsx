import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Detail",
	description: "Detail page",
};

export default function DetailLayout({ children }: { children: React.ReactNode }) {
	return children;
}
