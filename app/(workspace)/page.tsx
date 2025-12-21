import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
// import { currUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
// import Image from "next/image";
export default async function Home() {

  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel maxSize={65}>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={35} maxSize={35} minSize={25} className="flex">
        <div className="flex-1">
          {/* <TabbedSidebar currentWorkspace={currentWorkspace}/> */}
        </div>

      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
