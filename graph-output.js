// === GitGraph Code Start ===
//const main = gitgraph.branch("main");
<script>
  const graphContainer = document.getElementById("graph");
  const gitgraph = GitgraphJS.createGitgraph(graphContainer);

  const main = gitgraph.branch("main");
  main.commit("Initial commit (abc123) by You");
  main.commit("Second commit (def456) by You");
</script>

