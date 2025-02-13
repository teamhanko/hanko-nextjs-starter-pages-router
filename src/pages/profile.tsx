import HankoStarterHeader from "@/hanko starter components/HankoStarterHeader";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";
import HankoProfile from "@/components/HankoProfile";

export default function Profile() {
  return (
    <>
      <title>Hanko starter profile</title>
      <div>
        <HankoStarterInfo/>
        <HankoStarterHeader/>
        <HankoProfile/>
      </div>
    </>
  );
}
