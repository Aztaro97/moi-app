import React from "react";

interface ProgressProps {
  currentStep: number;
}

const Progress: React.FC<ProgressProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center pt-12 pb-2 md:pt-16 md:pb- 4">
      <div className="grid w-full max-w-4xl grid-cols-4 gap-4 md:gap-8">
        {/* Step 1 */}
        <IconWrapper isActive={currentStep === 1}>
          <ClipboardIcon />
          <div className="mt-2 text-center">
            <h3
              className={`text-sm font-medium ${
                currentStep === 1 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Step 1
            </h3>
            <p
              className={`text-xs  ${
                currentStep === 1 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Select Tickets
            </p>
          </div>
        </IconWrapper>

        {/* Step 2 */}
        <IconWrapper isActive={currentStep === 2}>
          <LayersIcon />
          <div className="mt-2 text-center">
            <h3
              className={`text-sm font-medium ${
                currentStep === 2 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Step 2
            </h3>
            <p
              className={`text-xs  ${
                currentStep === 2 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Service Summary
            </p>
          </div>
        </IconWrapper>

        {/* Step 3 */}
        <IconWrapper isActive={currentStep === 3}>
          <CheckIcon />
          <div className="mt-2 text-center">
            <h3
              className={`text-sm font-medium ${
                currentStep === 3 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Step 3
            </h3>
            <p
              className={`text-xs  ${
                currentStep === 3 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              Pay Online
            </p>
          </div>
        </IconWrapper>
      </div>
    </div>
  );
};

interface IconWrapperProps {
  children: React.ReactNode;
  isActive: boolean;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center ${
        isActive ? "text-blue-500" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Progress;

function CheckIcon(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function CodeIcon(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LayersIcon(props?: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </svg>
  );
}
