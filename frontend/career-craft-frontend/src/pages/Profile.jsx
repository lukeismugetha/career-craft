import ProfileCard from "../components/ProfileCard";
import CareerAdvisor from "../components/CareerAdvisor";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <ProfileCard />
      <CareerAdvisor />
    </div>
  );
}
