import HankoAuth from "@/components/HankoAuth";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";

export default function Home() {
  return (
    <>
      <title>Hanko Next.JS Starter</title>
      <div>
        <HankoStarterInfo/>    
        <HankoAuth/>    
      </div>
    </>
  );
}
