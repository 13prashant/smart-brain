const Rank = ({ user }) => {
    return (
        <div className='white'>
            <h1>{user.name}, your {`${user.entries > 1 ? 'entries are' : 'entry is'}`}...</h1>
            <h1>#{user.entries}</h1>
        </div>
    )
}

export default Rank
