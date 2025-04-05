export interface Location{
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    manager?: Manager;
    region?: any;
    employees?: Employee[];
}

export interface Employee{
    employeeId: number;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    employeePhoto?: string;
    location?: Location;
    user?: any;
}

export interface Manager{
    managerId: string;
    managerFullName: string;
    managerSalary: string;
    managerEmail: string;
    managerPhoneNumber: string;

    location: Location;

    user?: any;
}