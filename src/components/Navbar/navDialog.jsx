import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Textarea } from "../ui/textarea";

export function NavDialog({ open, setOpen }) {
  const onDialogOpen = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <Dialog open={open} onOpenChange={onDialogOpen}>
      <DialogContent className="sm:max-w-[625px] h-[400px] text-black bg-slate-50 font-roboto">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>
        <div className="grid  ">
          <div className="flex gap-4">
            <div className=" w-full">
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="border-gray-400 focus:outline-none"
              />
            </div>
            <div className="w-full ">
              <Input
                type="email"
                id="username"
                placeholder="Your Email"
                className="border-gray-400"
              />
            </div>
          </div>
          <div className="w-full">
            <Input
              id="name"
              placeholder="Subject"
              className="border-gray-400"
            />
          </div>

          <div className="w-full">
            <Textarea placeholder="Message " className="border-gray-400" />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={"secondary"}
            className="text-white hover:animate-in"
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
