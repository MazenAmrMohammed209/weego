const { execSync } = require('child_process');
try {
  console.log("Running next dev...");
  console.log(execSync('node node_modules\\next\\dist\\bin\\next build', {encoding: 'utf8'}));
} catch (e) {
  console.log("ERR:", e.message);
  console.log("STDOUT:", e.stdout);
  console.log("STDERR:", e.stderr);
}
