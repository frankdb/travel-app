"use client";

export default function UserInformationTab() {
  // const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Account Information</h2>
        <p className="text-sm text-muted-foreground">
          Your basic account details
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-muted-foreground">
            Email
          </label>
          <p className="mt-1">Email placeholder</p>
        </div>

        {/* <div>
          <label className="text-sm font-medium text-muted-foreground">
            Account Type
          </label>
          <p className="mt-1">
            {getEmploymentType(user?.user_type || "User account type not set")}
          </p>
        </div> */}
      </div>
    </div>
  );
}
