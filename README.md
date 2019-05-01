# Callbacks and Promises

Breadcrumbs in the event that this topic needs to be re-covered again.

# Background

NodeJS runs code asynchronously, meaning all the lines of code are run independently of others.

This is arguably good/bad because there are both ups & downsides to this sort of behavior:

- The good thing is that you get close to if not immediate results for an expression.
- The bad is that you are not certain in which order your program will deliver results.

Promises and callbacks are essentially countermeasures that give you control over the order in which code is executed.
