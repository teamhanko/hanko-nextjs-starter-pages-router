import HankoProfile from "@/components/HankoProfile"
import { LogoutBtn } from "@/components/LogoutButton"

const Dashboard = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <HankoProfile />
            <LogoutBtn />
        </div>
    )
}

export default Dashboard