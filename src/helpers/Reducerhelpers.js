/**
 * @Author: harsha
 * @Date:   2019-05-01T01:25:41+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T03:16:17+05:30
 */

export const sortedRepoBuilder = (repoList, type) => {
  const sortingRepos = type => (a, b) => b[type] - a[type];
  switch (type) {
    case "stars":
      return repoList.sort(sortingRepos("stargazers_count"));
    case "forks":
      return repoList.sort(sortingRepos("forks_count"));
    case "issues":
      return repoList.sort(sortingRepos("open_issues_count"));
    case "watchers":
      return repoList.sort(sortingRepos("watchers_count"));
    default:
      return repoList;
  }
};
