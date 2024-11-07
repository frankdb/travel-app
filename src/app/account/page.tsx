import Navbar from "@/components/shared/Navbar";
import AccountContent from "@/components/account/AccountContent";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        <AccountContent />
      </div>
    </>
  );
}
