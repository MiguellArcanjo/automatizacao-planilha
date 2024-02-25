import React from 'react'
import ApiService from '@/src/api/apiService'

export default function page() {
    const apiUrl = 'http://localhost:8080/api';
    const apiService = new ApiService(apiUrl);

    return (
        <div>page</div>
    )
}
