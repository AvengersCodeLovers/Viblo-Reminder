import axios from 'axios'
import { IStatsResponse } from '../interfaces/response/IStatsResponse'
class ApiService {

    viblo;
    
    constructor() {
        this.viblo = axios.create({
            baseURL: 'https://api.viblo.asia/',
            timeout: 10000,
            headers: {'Authorization': `Bearer ${process.env.VIBLO_TOKEN}` }
        })
    }

    async getOrganizationsStats (groupSlug: string, fromLastMonth: string, toLastMonth: string): Promise<IStatsResponse> {
        try {
            await this.viblo.get(`organizations/${groupSlug}/stats`, {
                params: {
                    from: fromLastMonth,
                    to: toLastMonth
                }
            }).then((res) => {
                return res.data
            })

            // return response.data
        } catch (error) {
            throw new Error(error)
        }
    }
}

export default ApiService