import { create } from "zustand";
import type { PermissionStatus } from "../../../infractructure/interfaces/permissions";
import { requestLocationPermission, checkLocationPermission } from '../../../actions/permissions/location';



interface PermissionsSate {
    locationStatus: PermissionStatus;


    requestLocationPermission: () => Promise<PermissionStatus>;
    checkLocationPermission: () => Promise<PermissionStatus>;
}


export const usePermissionStore = create<PermissionsSate>()(set => ({
    locationStatus: 'undetermined',

    requestLocationPermission: async () => {
        const status = await requestLocationPermission();
        set({ locationStatus: status })
        return status;
    },

    checkLocationPermission: async () => {
        const status = await checkLocationPermission();
        set({ locationStatus: status })
        return status;
    }



}))