import axios from 'axios'
import { IStatsResponse } from '../interfaces/response/IStatsResponse'
class ApiService {

    private viblo;
    
    constructor() {
        this.viblo = axios.create({
            baseURL: 'https://api.viblo.asia/',
            timeout: 10000,
            headers: {'Authorization': `Bearer ${process.env.VIBLO_TOKEN}` }
        })
    }

    getOrganizationsStats (groupSlug: string, fromLastMonth: string, toLastMonth: string): Promise<IStatsResponse> {
        return new Promise ((resolve, reject) => {
            try {
                const response = this.viblo.get(`organizations/${groupSlug}/stats`, {
                    params: {
                        from: fromLastMonth,
                        to: toLastMonth
                    }
                })

                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }
}

export default ApiService