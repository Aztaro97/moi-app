import React from "react";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePoliticingFormStepStore } from "@/stores/services/usePoliticingFormStepStore";

export default function PoliticingFormStepThree() {
  const { setCurrentStep } = usePoliticingFormStepStore();
  return (
    <>
      <Card className="w-full  mx-auto bg-transparent">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
          <CardDescription>Enter your payment details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" required type="text" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                pattern='"d{4} d{4} d{4} d{4}"'
                placeholder="0000 0000 0000 0000"
                required
                type="text"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiration">Expiration</Label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  id="expiration"
                  pattern='"d{2}/d{2}"'
                  placeholder="MM/YY"
                  required
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                pattern='"d{3}"'
                placeholder="123"
                required
                type="text"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex w-full justify-between items-center gap-x-5 mt-10">
        <Button variant="ghost" onClick={() => setCurrentStep(2)} type="submit">
          Previous
        </Button>
        <Button type="submit">Pay</Button>
      </div>
    </>
  );
}
