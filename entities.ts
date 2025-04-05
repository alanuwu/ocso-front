export interface Location{
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    manager?: any;
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