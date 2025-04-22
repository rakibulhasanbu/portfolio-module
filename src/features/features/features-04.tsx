"use client";

import type React from "react";

import { BarChart3, Clock, Globe, Shield, Smartphone, Zap } from "lucide-react";

import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const iconMap: Record<string, React.ReactNode> = {
  "Fast Performance": <Zap className="h-6 w-6" />,
  "Secure Platform": <Shield className="h-6 w-6" />,
  "Advanced Analytics": <BarChart3 className="h-6 w-6" />,
  "24/7 Support": <Clock className="h-6 w-6" />,
  "Mobile Friendly": <Smartphone className="h-6 w-6" />,
  "Global Access": <Globe className="h-6 w-6" />,
};

export const Features04 = ({ data }: Props) => {
  const getIconForFeature = (featureTitle: string | undefined) => {
    if (!featureTitle) return <Zap className="h-6 w-6" />;
    return iconMap[featureTitle] || <Zap className="h-6 w-6" />;
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          {data?.subTitle && (
            <p className="mb-2 font-medium text-primary">{data?.subTitle}</p>
          )}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{data?.title}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{data?.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data?.sectionList.map((feature) => (
            <div key={feature.id} className="flex items-start p-4">
              <div className="mr-4 flex-shrink-0">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  {getIconForFeature(feature.title)}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
