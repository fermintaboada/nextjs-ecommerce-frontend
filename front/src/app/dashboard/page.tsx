"use client";

import { UseAuth } from "@/contexts/AuthContext";

const DashboardPage = () => {
  const { dataUser } = UseAuth();

  return <div>
    <section>
      <p> {dataUser?.user.email}</p>
    </section>
  </div>
};

export default DashboardPage;