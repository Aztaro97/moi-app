import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";
import { useRouter } from "next/navigation";

interface SuccessPaymentAlertProps {
  showAlert: boolean;
  setShowAlert: (value: boolean) => void;
}

export default function SuccessPaymentAlert({
  showAlert,
  setShowAlert,
}: SuccessPaymentAlertProps) {
  const { handleResetStep } = usePoliticingFormStepStore();

  const handleGoToGame = () => {
    handleResetStep();
    setShowAlert(false);
  };
  return (
    <AlertDialog open={showAlert} defaultOpen={false}>
      <AlertDialogContent className="p-5 ">
        <AlertDialogHeader className="p-0">
          <div className=" flex items-center justify-center ">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-transparent">
              <div className="flex flex-col items-center justify-center space-y-4">
                <CircleCheckIcon className="h-16 w-16 text-green-500" />
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold">Payment Successful</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Your payment has been processed successfully. Thank you for
                    your purchase!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="py-3 px-5 text-3xl text-center bg-primary"
            onClick={handleGoToGame}
            href={"/game"}
          >
            Go to Game
          </Link>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function CircleCheckIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
