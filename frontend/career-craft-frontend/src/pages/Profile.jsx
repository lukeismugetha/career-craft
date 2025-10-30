import ProfileCard from "../components/ProfileCard";
import CareerAdvisor from "../components/CareerAdvisor";

export default function Profile() {
  return (
    <div className="glass p-6 rounded-xl neon-outline">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <ProfileCard />
      <CareerAdvisor />
    </div>
  );
}
