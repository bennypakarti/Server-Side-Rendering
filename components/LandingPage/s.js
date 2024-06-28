{profile.map((user,index) => {
    return(
      <div className="landingpage" key={index}>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.job}</h1>
        <h1>{user.greeting}</h1>
    </div>
    )
  })}