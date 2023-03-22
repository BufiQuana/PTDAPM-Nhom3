import { store } from '../../redux/store';
import { request } from '../../api/config';
import { END_POINTS } from '../../api/url';

const DASHBOARD_API = {
    getListDashboard: () => {
        const data = request
            .get(END_POINTS.Dashboard.listDashboard)
            .then((response: any) => {
                return response;
            })
            .catch(e => {
                return null;
            });
        return data;
    },
    getListNews: (body: any) => {
        const data = request
            .get(END_POINTS.Dashboard.listNews, {
                params: body,
            })
            .then((response: any) => {
                return response;
            })
            .catch(e => {
                return null;
            });
        return data;
    },
    getListDepartment: () => {
        const data = request
            .get(END_POINTS.Dashboard.listDepartment)
            .then((response: any) => {
                return response;
            })
            .catch(e => {
                return null;
            });
        return data;
    },
    getListDepartmentInNew: () => {
        const data = request
            .get(END_POINTS.Dashboard.getListDepartmentInNew)
            .then((response: any) => {
                return response;
            })
            .catch(e => {
                return null;
            });
        return data;
    },
    getListStatus: (month: any, year: any) => {
        const data = request
            .get(END_POINTS.Dashboard.listStatus, {
                params: {
                    month,
                    year,
                },
            })
            .then((response: any) => {
                return response;
            })
            .catch(e => {
                return null;
            });
        return data;
    },
};

export { DASHBOARD_API };
