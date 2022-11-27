import { defineStore } from 'pinia';
import { axiosInstance } from '~/services/http';
import type { ApiResponseSettings } from '~/types/api';
import type { Notification } from '~/components/Common/ToastNotification.vue';
import { uid } from 'uid/single';

interface State {
    settings: ApiResponseSettings;
    notifications: Notification[];
}

export const useStoreApp = defineStore('app', {
    state: (): State => ({
        settings: {
            currency: [],
            accountTypes: []
        },
        notifications: []
    }),

    actions: {
        async fetchSettings() {
            try {
                const response = await axiosInstance.get<ApiResponseSettings>('/settings');
                this.settings = response.data;
            } catch (e) {
                console.error(e);
            }
        },

        addNotification(notification: Omit<Notification, 'id'>) {
            const notificationUid = uid();
            this.notifications = [...this.notifications, { id: notificationUid, ...notification }];

            setTimeout(() => {
                this.deleteNotification(notificationUid);
            }, 5000);
        },

        deleteNotification(notificationId: Notification['id']) {
            const notificationIndex = this.notifications.findIndex((n) => n.id === notificationId);

            if (notificationIndex > -1) {
                this.notifications.splice(notificationIndex, 1);
            }
        }
    }
});
