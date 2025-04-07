import { ChevronLeftIcon, LightbulbIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";

// Campaign steps data
const campaignSteps = [
  { id: 1, name: "Objectives", status: "completed" },
  { id: 2, name: "Landing page", status: "completed" },
  { id: 3, name: "Audiences", status: "active" },
  { id: 4, name: "Target cost", status: "pending" },
  { id: 5, name: "Budget", status: "pending" },
  { id: 6, name: "Ads", status: "pending" },
];

// Main steps data
const mainSteps = [
  { id: 1, name: "Campaign creation", status: "active" },
  { id: 2, name: "Review & Submit", status: "pending" },
  { id: 3, name: "Payment", status: "pending" },
  { id: 4, name: "Tracking & Conversions", status: "pending" },
];

export const Audiences = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="h-[60px] p-5 bg-[#1d4488] flex items-center">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Realize logo"
            src="https://c.animaapp.com/m95y9zxjv3QmAP/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m95y9zxjv3QmAP/img/vector.svg"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left sidebar */}
        <aside className="w-[213px] flex flex-col bg-white border-r border-[#d4d9df]">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col p-6 relative">
              <img
                className="absolute w-[45px] h-[45px] top-[43px] left-[191px]"
                alt="Arrow"
                src="https://c.animaapp.com/m95y9zxjv3QmAP/img/arrow.svg"
              />

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full">
                <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    {/* Main step 1 */}
                    <div className="flex h-9 items-center gap-2 relative self-stretch w-full">
                      <Badge
                        variant="outline"
                        className="flex-col min-w-6 h-6 items-center justify-center px-[7px] py-0 rounded-[100px] border-[1.5px] border-blue"
                      >
                        <span className="mt-[-1.50px] font-medium text-blue text-xs text-center tracking-[0.40px] leading-[19.9px]">
                          1
                        </span>
                      </Badge>
                      <div className="inline-flex items-center gap-2.5 relative">
                        <span className="relative w-fit mt-[-1.00px] font-medium text-gray-9 text-sm tracking-[0] leading-[18px] whitespace-nowrap">
                          Campaign creation
                        </span>
                      </div>
                    </div>

                    {/* Campaign steps */}
                    <div className="flex flex-col items-start relative self-stretch w-full">
                      {campaignSteps.map((step, index) => (
                        <React.Fragment key={step.id}>
                          {index > 0 && (
                            <div className="flex h-8 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                              <div
                                className={`relative self-stretch w-0.5 ${
                                  step.status === "active"
                                    ? "bg-blue"
                                    : step.status === "completed"
                                    ? "bg-gray-8"
                                    : "bg-gray-6"
                                }`}
                              />
                            </div>
                          )}
                          <div className="inline-flex h-2 items-center gap-2 pl-[5px] pr-0 py-0 relative">
                            <div className="flex flex-col w-3.5 h-3.5 items-center justify-center gap-2.5 relative mt-[-3.00px] mb-[-3.00px] rounded-[20px]">
                              <div
                                className={`relative w-2 h-2 rounded ${
                                  step.status === "active"
                                    ? "bg-blue"
                                    : step.status === "completed"
                                    ? "bg-gray-8"
                                    : "bg-gray-6"
                                }`}
                              />
                            </div>
                            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mt-[-3.00px] mb-[-3.00px]">
                              <span
                                className={`relative w-fit mt-[-1.00px] font-roboto text-sm tracking-[0] leading-[14px] whitespace-nowrap 
                                ${
                                  step.status === "active"
                                    ? "font-bold text-blue"
                                    : step.status === "completed"
                                    ? "font-normal text-gray-8"
                                    : "font-normal text-gray-6"
                                }`}
                              >
                                {step.name}
                              </span>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                      <div className="flex h-6 items-center gap-2.5 px-[11px] py-0 relative self-stretch w-full">
                        <div className="bg-gray-6 relative self-stretch w-0.5" />
                      </div>
                    </div>

                    {/* Main steps 2-4 */}
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                      {mainSteps.slice(1).map((step) => (
                        <div
                          key={step.id}
                          className="flex h-9 items-center gap-2 relative self-stretch w-full"
                        >
                          <Badge
                            variant="outline"
                            className="flex-col min-w-6 h-6 items-center justify-center px-[7px] py-0 rounded-[100px] border border-[#667686]"
                          >
                            <span className="mt-[-1.00px] font-typography-caption text-gray-7 text-[length:var(--typography-caption-font-size)] text-center tracking-[var(--typography-caption-letter-spacing)] leading-[var(--typography-caption-line-height)]">
                              {step.id}
                            </span>
                          </Badge>
                          <div className="flex items-center gap-2.5 relative flex-1">
                            <span className="relative flex-1 mt-[-1.00px] font-roboto font-normal text-gray-7 text-sm tracking-[0] leading-[18px]">
                              {step.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tip card */}
          <Card className="flex h-[71px] items-center justify-center gap-2 p-4 mx-6 mb-0 rounded-t-md border-[1.5px] border-b-0 border-[#8051e3]">
            <CardContent className="flex items-center p-0">
              <LightbulbIcon className="w-6 h-6 text-[#8051e3]" />
              <div className="flex items-center justify-center gap-2.5 relative flex-1 grow">
                <p className="relative flex-1 mt-[-1.00px] font-roboto font-normal text-gray-9 text-base tracking-[0] leading-6">
                  <span className="font-medium text-[#212832]">Tip: </span>
                  <span className="text-[#4b545f]">Conversion rules</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col h-full items-center justify-center gap-2.5 relative w-full">
              <div className="flex flex-col items-center gap-10 relative self-stretch w-full">
                {/* Country selection */}
                <div className="inline-flex flex-col items-center gap-8 relative">
                  <div className="inline-flex flex-col items-center gap-4 relative">
                    <h1 className="text-gray-9 text-[28px] font-bold leading-[100%] tracking-[0] mt-[-1.00px]">
                      Where is your target audience located?
                    </h1>
                  </div>

                  <Select defaultValue="United States">
                    <SelectTrigger className="w-[520px] h-10 pl-3 pr-2 py-0 rounded-md border border-[#b8c1ca]">
                      <SelectValue placeholder="United States" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Region selection */}
                <div className="inline-flex flex-col items-center gap-8 relative">
                  <div className="inline-flex flex-col items-center gap-4 relative">
                    <h2 className="text-gray-9 text-[28px] font-bold leading-[100%] tracking-[0] mt-[-1.00px]">
                      Select Region
                    </h2>
                  </div>

                  <Select defaultValue="All Regions">
                    <SelectTrigger className="w-[520px] h-10 pl-3 pr-2 py-0 rounded-md border border-[#b8c1ca]">
                      <SelectValue placeholder="All Regions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Regions">All Regions</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="relative w-full h-[71px] bg-white">
            <Separator className="absolute w-full h-px top-0 left-0" />

            <div className="flex justify-between items-center h-full px-4">
              <Button
                variant="ghost"
                className="inline-flex items-center gap-0.5 pl-2 pr-4 py-2 text-gray-7"
              >
                <ChevronLeftIcon className="w-5 h-5" />
                Back
              </Button>

              <Button className="bg-blue rounded">Next</Button>
            </div>
          </footer>
        </main>

        {/* Right sidebar */}
        <aside className="w-[430px] flex items-center justify-center bg-light-blue border-l border-[#d4d9df]">
          <img
            className="w-[429px] h-[430px]"
            alt="Campaign illustration"
            src="https://c.animaapp.com/m95y9zxjv3QmAP/img/layer-1.png"
          />
        </aside>
      </div>
    </div>
  );
};
