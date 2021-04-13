const Navigation = ({ routeChange, isSignedIn }) => {
    return (
        isSignedIn ?
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => routeChange('signin')}
                    className='link dim pa2 f3 pointer underline'>
                    Sign Out
                </p>
            </div>
            : <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p
                    onClick={() => routeChange('signin')}
                    className='link dim pa2 f3 pointer underline'>
                    Sign In
                </p>
                <p
                    onClick={() => routeChange('register')}
                    className='link dim pa2 f3 pointer underline'>
                    Register
                </p>
            </div>

    )
}

export default Navigation
