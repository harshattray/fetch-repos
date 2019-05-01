/**
 * @Author: harsha
 * @Date:   2019-04-30T17:06:27+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-05-01T23:36:41+05:30
 */

import styled from "styled-components";

export default styled.div`
  .list-view {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #f7f7f7;
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px;
  }

  .repo-card-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0 0 10px;
  }
  .repo-sort-filter {
    width: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 0;
  }
  .repo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 10px 0;
  }
`;
