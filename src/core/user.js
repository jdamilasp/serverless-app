
module.exports.register = async (event, context) => {
    return {
        status: 200,
        body: JSON.stringify(
          {
            userId: "<< SAMPLE USER ID HERE>>",
            token: "<< SAMPLE TOKEN HERE >>"
          }
        )
      };
}

module.exports.qrCode = async (event, context) => {
    return {
        status: 200,
        body: JSON.stringify(
          {
            data: "<< SAMPLE DATA HERE>>",           
          }
        )
      };
}