import React, { useEffect } from 'react'
import { useAuth } from '../Context/FakeAuthContext'
import { useNavigate } from 'react-router-dom'

function ProectedRoute({ children }) {
    const { isAuthenticated } = useAuth()
    const navigate = useNavigate()

    useEffect(
        function () {
            if (!isAuthenticated)
                navigate('/')
        },
        [isAuthenticated, navigate]
    )

    return isAuthenticated ? children : ''
}

export default ProectedRoute