// Do some computation using the methods
// you defined in the JS Library
logger.info("SC01 Begin Iteration:"+context.currentVU.getCurrentIteration() + " User:" +  context.variableManager.getValue("Cportal_SC01_Users.User") );
logger.debug("SC01 Begin Iteration:"+context.currentVU.getCurrentIteration() + " User:" +  context.variableManager.getValue("Cportal_SC01_Users.User") );

writeLogFile("c://tmp//CPORTAL_SC01.log", context.currentVU.getCurrentIteration(),  context.variableManager.getValue("Cportal_SC01_Users.User"));