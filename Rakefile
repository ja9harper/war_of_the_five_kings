include FileUtils

desc "(alias: 'x') Creates correctly formatted " + \
     "student starter code for the contained exercises"
task 'exercise', [:book, :type, :directory, :version] do |cmd, args|

  # handle options
  options = {
    type:      "browserNoTests",
    directory: ".",
    version:   "starter"
  }.merge args

  # TODO (PJ): add this and version to readme
  # TODO (PJ): good place to test WDI Gem
  options[:directory] = ENV["STUDENT_DIR"] || "."

  unless options[:book]
    puts "Missing argument ':book', need to pass a number 1 thru 6."
    exit 1
  end

  if options[:type] !~ /(browser|node)(NoTests|Tested)/
    puts "Argument ':type' misformatted, must be:\n" + \
         "   (default) browserNoTests, browserTested, nodeNoTests, or nodeTested."
    exit 1
  end

  unless File.directory?(File.expand_path(options[:directory]))
    puts "Path '#{options[:directory]}' doesn't exist or isn't a directory! Can't build there."
    exit 1
  end

  no_directory_given = options[:directory] == "."

  # define dir paths
  base_dir = File.expand_path("..", File.expand_path(__FILE__))

  source_exercise_name = Dir["{book#{options[:book]}}*"].first
  target_exercise_name = source_exercise_name.split('_')[1]

  source_dir = File.join base_dir, source_exercise_name, options[:type], options[:version]
  target_dir = File.join(File.expand_path(options[:directory]), target_exercise_name)
  # puts source_dir + "/*"
  # puts target_dir

  # now build exercise!
  # mkdir_p(target_dir, verbose: false) # ensure the path to the target is built
  rmdir(target_dir,  verbose: false) if File.exists?(target_dir) # clear out / overwrite what's there
  mkdir(target_dir, verbose: false)    # add the empty target directory
  Dir[source_dir + "/*"].each do |path|
    cp_r(path, target_dir, :verbose => false)
  end

  if no_directory_given
    puts "Exercise directory './#{target_exercise_name}' created! Move it to the student repo as is!"
  else
    puts "Exercise directory '#{File.join(options[:directory], target_exercise_name)}' created!"
  end
end

task 'x', [:book, :type, :directory, :version] => 'exercise'
