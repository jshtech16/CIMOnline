import React from "react";
import AdminSidebar from "../component/admindashboard/sidebar";
import AdminTable from "../component/admindashboard/adminTable";

function AdminDashboardPage() {
    return (
        <div className="d-flex">
            <AdminSidebar />
            <AdminTable />
        </div>
    )
}

export default AdminDashboardPage;