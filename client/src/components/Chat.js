const Chat = ({descendingOrderMessages}) => {
    return (
        <>
          <div className='chat-display'>
              {descendingOrderMessages.map((messages,_index) => (
                  <div key={_index}>
                      <div className="chat-message-header">
                          <div className="img-container">
                              <img src={messages.img} alt={messages.first_name + ' profile'}/>
                          </div>
                          <p>{messages.name}</p>
                          <div>
                              <p>
                                  {messages.message}
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </>
    )
}

export default Chat