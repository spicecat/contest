import { Button } from '@material-ui/core'

import { logout } from '../services/userService'

export default function Logout() {
    return (
        <Button color='inherit' variant='outlined' onClick={logout}>Logout</Button>
    )
}