class GitHub {
    constructor() {
        this.client_id = '53410cfebc329ff72551';
        this.cliend_secret = '3e2e9162304539014364ef16fcac64811680cac4';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}