class GitHub {
  constructor() {
    this.client_id = '45e05420d198509808aa';
    this.client_secret = '326f2442493862155015285ee838288b99cbd05c';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}??client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    return {
      profile 
    }
  }
}