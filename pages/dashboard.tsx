import dynamic from 'next/dynamic';
import { useUserData } from "@/hooks/useUserData";

const HankoProfile = dynamic(() => import('@/components/HankoProfile'), { ssr: false })
import { LogoutBtn } from "@/components/LogoutButton"

const Dashboard = () => {
    const { id, email, loading: userDataLoading, error: userDataError } = useUserData();
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>User id: {id}</div>
            <div>User email: {email}</div>
            <HankoProfile />
            <LogoutBtn />
        </div>
    )
}

export default Dashboard