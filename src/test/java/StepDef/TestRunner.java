package StepDef;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/main/resources/feature_files", plugin = {"pretty", "html:target/ReportsDestination"}, tags = "@TestsToRun", glue={"step_defs"})
public class TestRunner {
}
