echo start cmd ...
if exist node_modules\ (
    yarn run start
    pause
) else (
    yarn install && yarn run start
    pause
)
