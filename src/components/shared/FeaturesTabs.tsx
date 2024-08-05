import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FeaturesTabs() {
  const features = [
    {
      technology: "AI-Powered Transcreation",
      features: [
        {
          title: "Seamless Transcreation",
          advantages: [
            "Accurate Translations: AI-driven translation for precise multi-language audio tracks.",
            "Voice Matching: Natural-sounding voice matching to retain original tone.",
            "Real-Time Processing: Quickly convert and produce multi-language audio.",
          ],
        },
        {
          title: "Effortless Integration",
          advantages: [
            "API Access: Comprehensive API for integrating with various platforms.",
            "User-Friendly Interface: Intuitive dashboard for managing projects.",
            "Compatibility: Supports major audio and video formats for seamless integration.",
          ],
        },
        {
          title: "Flexible Deployment",
          advantages: [
            "Cloud-Based: Scalable cloud infrastructure for reliable performance.",
            "On-Premise: Options for on-premise deployment to meet specific needs.",
            "Hybrid Solutions: Combine cloud and on-premise for flexibility.",
          ],
        },
      ],
    },
    {
      technology: "Advanced Features",
      features: [
        {
          title: "Customizable Voices",
          advantages: [
            "Tailor voices for specific needs and preferences.",
            "Choose from a variety of voice profiles.",
            "Adapt voices to different languages and dialects.",
          ],
        },
        {
          title: "Background Noise Reduction",
          advantages: [
            "AI-enhanced noise reduction for clear audio.",
            "Improve the quality of recordings.",
            "Reduce ambient noise for professional-grade audio.",
          ],
        },
        {
          title: "Multi-Speaker Support",
          advantages: [
            "Isolate and process multiple speakers accurately.",
            "Distinguish between different speakers in a single track.",
            "Improve clarity and understanding of conversations.",
          ],
        },
      ],
    },
    {
      technology: "Security and Compliance",
      features: [
        {
          title: "Data Privacy",
          advantages: [
            "GDPR Compliance: Ensure customer data is handled in accordance with GDPR.",
            "Secure Storage: Encrypted storage for all audio files and transcriptions.",
            "Access Control: Role-based access control to manage user permissions.",
          ],
        },
        {
          title: "Fraud Prevention",
          advantages: [
            "Activity Monitoring: Monitor and log all activities to prevent misuse.",
            "Anomaly Detection: AI-driven detection of unusual activities to safeguard data.",
            "Secure Transactions: Ensure all transactions are secure and verified.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="mt-8 w-full flex flex-col items-center justify-center">
        <Tabs
          className="w-full flex flex-col items-center justify-center"
          defaultValue="AI-Powered Transcreation"
        >
          <TabsList className="w-fit flex justify-center md:space-x-4 mb-4">
            {features.map((feature, i) => (
              <TabsTrigger key={i} value={feature.technology}>
                {feature.technology}
              </TabsTrigger>
            ))}
          </TabsList>
          {features.map((feature, i) => (
            <TabsContent key={i} value={feature.technology}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                {feature.features.map((fea, i) => (
                  <Card
                    key={i}
                    className="shadow-lg rounded-lg flex flex-col justify-between"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl">{fea.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        {fea.advantages.map((advantage, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground text-[0.9rem]"
                          >
                            {advantage}
                          </li>
                        ))}
                      </ul>
                      {/* <div className="mt-4">
                        <p className="text-sm text-muted-foreground mt-2">
                          15% YoY
                        </p>
                      </div> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </>
  );
}
