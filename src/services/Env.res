type t = {
  @as("NODE_ENV")
  nodeEnv: option<string>,
}
@val @scope("process") external env: t = "env"

let nodeEnv = env.nodeEnv